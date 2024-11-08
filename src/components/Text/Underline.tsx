import React from 'react';

interface Props {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export default ({ style, children }: Props) => {
	return <span style={{ ...style, textDecoration: 'underline' }}>{children}</span>;
};
