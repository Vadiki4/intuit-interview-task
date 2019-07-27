import React, { useContext } from 'react';
import { MachineContext } from '../index';

const Worker = ({
	component: Component,
	className,
	key,
	activeState,
	...restProps
}) => {
	const context = useContext(MachineContext);
	if (activeState === context.currentState) {
		return (
			<div className={className} key={key}>
				<Component currentState={context.currentState} {...restProps} />
			</div>
		);
	}
	return null;
};

export default Worker;
