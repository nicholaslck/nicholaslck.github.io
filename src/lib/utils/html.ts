import { rehype } from 'rehype';
import addClasses from 'rehype-class-names';

const options = {
	h1: 'h1 my-4',
	h2: 'h2 my-4',
	h3: 'h3 my-4',
	h4: 'h4 my-4',
	h5: 'h5 my-4',
	h6: 'h6 my-4',
	a: 'anchor',
	blockquote: 'blockquote',
	pre: 'pre',
	code: 'code',
    'pre code': { code : false },
	kbd: 'kbd',
	del: 'del',
	ins: 'ins',
    ul: 'list-disc px-8 my-2',
    ol: 'list-decimal px-8 my-2',
    p: 'my-4',
	img: 'mx-auto'
};

const processor = rehype().use(addClasses, options);

export const postprocessHtml = (html: string) => {
	return processor.processSync(html).toString();
};
