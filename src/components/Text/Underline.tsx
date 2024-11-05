import React from 'react';

interface Props {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

const Quote = ({ style, children }: Props) => {
	return <span style={{ ...style, textDecoration: 'underline' }}>{children}</span>;
};

export default Quote;
