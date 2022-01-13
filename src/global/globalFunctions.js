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
        case CONTENT_TYPES.PARAGRAPH: component = <Paragraph id={response.id} content={response.content} />;
            break;
        case CONTENT_TYPES.IMAGE: component = <Image src={response.src} alt={response.alt} position={response.position} text={response.text} />
            break;
        case CONTENT_TYPES.QUOTE: component = <Quote content={response.content} />
            break;
    }
    return component;

};