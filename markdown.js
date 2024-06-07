import Snarkdown from 'snarkdown';


/**
 * Takes the text set as its innerText, uses Snarkdown to convert it to a
 * string of HTML, and sets it as the shadowRoot's innerHTML
 */
class TagarogguCEMarkdown extends HTMLElement {
    constructor() {
        super();
        this.mutationObserver = new MutationObserver(() => this.textChange());
        this.attachShadow({ mode: 'open' });
        this.mutationObserver.observe(this, { characterData: true, childList: true });
        this.textChange();
    }

    textChange() {
        this.shadowRoot.innerHTML = Snarkdown(this.textContent);
    }
}

customElements.define('tagaroggu_ce-markdown', TagarogguCEMarkdown);

export default TagarogguCEMarkdown;