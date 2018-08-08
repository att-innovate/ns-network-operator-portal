/*

	TODO: look through the Redux documentation to see if data should be
	nested, and if the current default export is flat enough.

	TODO: should fields be joined into string form at the api level, or the
	component level?

*/

export default [
	{
		id: 1,
		key: '1',
		name: "Factory Robotics Control",
		desc: "Controlling and managing factory robotics using on-site radio access and network functions to minimize latency, and locally running applications.",
		blueprintId: 1,
		trafficTypeOptions: ['continuous', 'bursty', 'event-driven', 'periodic', 'all'],
		suggestedTrafficType: 'all',
		trafficTypeLocked: false,
		latencyLowerBoundValue: 5,
		latencyLowerBoundUnit: 'ms',
		latencyUpperBoundValue: 10,
		latencyUpperBoundUnit: 'ms',
		throughputLowerBoundValue: 0.1,
		throughputLowerBoundUnit: 'Gbps',
		throughputUpperBoundValue: 1.0,
		throughputUpperBoundUnit: 'Gbps',
		availabilityOptions: [95, 96, 97, 98, 99, 99.9, 99.99, 99.999],
		suggestedAvailability: 99.99,
		availabilityLocked: false
	}
]