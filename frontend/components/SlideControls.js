import { html } from "../imports/Preact.js"

export const SlideControls = () => {
    const calculate_slide_positions = (/** @type {Event} */ e) => {
        const notebook_node = /** @type {HTMLElement?} */ (e.target)?.closest("pluto-notebook")
        if (!notebook_node) return []

        const height = window.innerHeight
        const headers = Array.from(notebook_node.querySelectorAll("pluto-output h1, pluto-output h2"))
        const pos = headers.map((el) => el.getBoundingClientRect())
        const edges = pos.map((rect) => rect.top + window.pageYOffset)

        edges.push(notebook_node.getBoundingClientRect().bottom + window.pageYOffset)

        const scrollPositions = headers.map((el, i) => {
            if (el.tagName == "H1") {
                // center vertically
                const slideHeight = edges[i + 1] - edges[i] - height
                return edges[i] - Math.max(0, (height - slideHeight) / 2)
            } else {
                // align to top
                return edges[i] - 20
            }
        })

        return scrollPositions
    }

    const go_previous_slide = (/** @type {Event} */ e) => {
        const positions = calculate_slide_positions(e)

        const pos = positions.reverse().find((y) => y < window.pageYOffset - 10)

        if (pos) window.scrollTo(window.pageXOffset, pos)
    }

    const go_next_slide = (/** @type {Event} */ e) => {
        const positions = calculate_slide_positions(e)
        const pos = positions.find((y) => y - 10 > window.pageYOffset)
        if (pos) window.scrollTo(window.pageXOffset, pos)
    }

    // @ts-ignore
    window.present = () => {
        document.body.classList.toggle("presentation")
    }

    return html`
        <nav id="slide_controls">
            <button class="changeslide prev" title="Previous slide" onClick=${go_previous_slide}><span></span></button>
            <button class="changeslide next" title="Next slide" onClick=${go_next_slide}><span></span></button>
        </nav>
    `
}
