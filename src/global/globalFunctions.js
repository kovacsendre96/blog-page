import Image from "./Image";
import Paragraph from "./Paragraph";
import Quote from "./Quote";

export const CONTENT_TYPES = {
    PARAGRAPH: 1,
    IMAGE: 2,
    QUOTE: 3
}

export const contentSeparator = (response) => {
    let component;
    switch (response.type) {
        case CONTENT_TYPES.PARAGRAPH:
            component = <Paragraph id={response.id} content={response.content} response={response}/>;
            break;
        case CONTENT_TYPES.IMAGE:
            component = <Image src={response.src} alt={response.alt} position={response.position} text={response.text}/>
            break;
        case CONTENT_TYPES.QUOTE:
            component = <Quote content={response.content}/>
            break;
    }
    return component;

};

export const setLinkFromText = (referenceLinks, linkedText, text) => {
    const linkRegex = /@\S+/gm;
    const renderTag = (link, foundText) => {
        if (!referenceLinks.includes('http')) {
            link = `http://${link}`;
        }
        return `<a target="_blank" rel="noopener noreferrer" href="${link}">${foundText}</a>`;
    }
    let foundText = text.match(linkRegex);
    if (foundText) {
        linkedText.map((link, index) => {
            if (foundText.includes(linkedText[index])) {
                text = text.replace(linkedText[index], renderTag(referenceLinks[index], linkedText[index].replace('@', '')));
            }
        })
    }
    return text;
};