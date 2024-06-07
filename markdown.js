import Snarkdown from 'snarkdown';


/**
 * Takes the text set as its innerText, uses Snarkdown to convert it to a
 * string of HTML, and sets it as the shadowRoot's innerHTML
 */
class TagarogguCEMarkdown extends HTMLElement {
    constructor() {
        super();
        this.mutationObserver = new MutationObserver(() => {
            this.shadowRoot.innerHTML = Snarkdown(this.textContent);
        });
        this.attachShadow({ mode: 'open' });
        this.mutationObserver.observe(this, { characterData: true, childList: true });
    }
}

customElements.define('tagaroggu_ce-markdown', TagarogguCEMarkdown);

export default TagarogguCEMarkdown;