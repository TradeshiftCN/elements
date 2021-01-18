import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './button-group.css';

export class TSButtonGroup extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	render() {
		return html`
			<section>
				<!-- All \`ts-button\` elements in the group should be wrapped with \`ts-button-group\` element to be grouped together -->
				<slot @slotchange="${this.handleSlotChange}"></slot>
			</section>
		`;
	}

	firstUpdated() {
		this.handleSlotChange();
	}

	handleSlotChange() {
		Array.from(this.querySelectorAll('ts-button')).forEach(button => {
			button.grouped = true;
		});
	}
}

customElementDefineHelper('ts-button-group', TSButtonGroup);
