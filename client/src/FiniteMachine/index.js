import React, { useState } from 'react';
import get from 'lodash/get';
import MachineContext from './lib/MachineContext';
export { default as MachineContext } from './lib/MachineContext';
export { default as Worker } from './lib/Worker';
export function FiniteMachine({ jsonData, children, ...restProps }) {
	const [currentState, setCurrentState] = useState(jsonData.initial);
	const [lastState, setLastState] = useState(null);
	const [ctx, setCtx] = useState(jsonData.context);
	function transition(currentState, action) {
		try {
			if (typeof currentState === 'string' && currentState.length) {
				const stateLookup = currentState.split('.');
				if (stateLookup.length) {
					let foundNextState;
					if (action === 'RETRY') {
						foundNextState = get(
							jsonData,
							['states', ...stateLookup, 'on', action, 'target'],
							undefined
						);
					} else {
						foundNextState = get(
							jsonData,
							['states', ...stateLookup, 'on', action],
							undefined
						);
					}
					if (foundNextState && foundNextState.length) {
						setLastState(currentState);
						setCurrentState(foundNextState);
					}
					return foundNextState;
				} else {
					console.log('stateLookup is empty!');
				}
			} else {
				console.log('nextState is not a string!');
			}
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div {...restProps}>
			<MachineContext.Provider
				value={{
					ctx,
					currentState,
					lastState,
					transition,
					updateState: setCtx
				}}
			>
				{children.map((child, index) => {
					if (child.type === 'Worker' || child.type.name === 'Worker') {
						const newChild = React.cloneElement(
							child,
							{
								...child.props,
								key: index,
								className: 'worker'
							},
							...children
						);
						return newChild;
					}
					return null;
				})}
			</MachineContext.Provider>
		</div>
	);
}
