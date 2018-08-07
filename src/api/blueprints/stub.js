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
		name: "Critical_MTC",
		version: 1.0,
		retired: false,		
		desc: 'Critical Machine Type Communication, for critical applications such as industrial internet, smart grids, infrastructure protection, remote surgery and intelligent transportation systems.',
		latencyLowerBoundValue: 0.5,
		latencyLowerBoundUnit: 'ms',
		latencyLowerBoundString: '0.5 ms',
		latencyUpperBoundValue: 10.0,
		latencyUpperBoundUnit: 'ms',
		latencyUpperBoundString: '10.0 ms',
		maxThroughputValue: 1.0,
		maxThroughputUnit: 'Gbit/s',
		maxThroughputString: '1.0 Gbit/s',
		maxBitrateValue: 1.0,
		maxBitrateUnit: 'Gbit/s',
		maxBitrateString: '1.0 Gbit/s',
		gtdBitrateValue: 100.0,
		gtdBitrateUnit: 'Mbit/s',
		gtdBitrateString: '100.0 Mbit/s',
		createdAt: '2017.11.01',
		createdBy: 'Erik',
		updatedAt: '2018.01.01',
		updatedBy: 'John',
		tags: ['critical', 'control', 'automation'],
		resources: {
			customerSite: [
				'vRAN'
			],
			edgeDC: [
				'vEPG',
				'vAPP'
			],
			regionalDC: [],
			nationalDC: [
				'vHSS',
				'vMME'
			]
		}
	}
]

// export default [
// 	{
// 		name: "Critical_MTC",
// 		version: 1.0,
// 		desc: 'Critical Machine Type Communication, for critical applications such as industrial internet, smart grids, infrastructure protection, remote surgery and intelligent transportation systems.',
// 		latency: {
// 			lowerBound: {
// 				value: 0.5,
// 				unit: 'ms'
// 			},
// 			upperBound: {
// 				value: 10.0,
// 				unit: 'ms'
// 			}
// 		},
// 		maxThroughput: {
// 			value: 1.0,
// 			unit: 'Gbit/s'
// 		},
// 		maxBitrate: {
// 			value: 1.0,
// 			unit: 'Gbit/s'
// 		},
// 		gtdBitrate: {
// 			value: 100.0,
// 			unit: 'Mbit/s'
// 		},
// 		createdAt: '2017.11.01',
// 		createdBy: 'Erik',
// 		updatedAt: '2018.01.01',
// 		updatedBy: 'John',
// 		tags: ['critical', 'control', 'automation'],
// 		resources: {
// 			customerSite: [
// 				'vRAN'
// 			],
// 			edgeDC: [
// 				'vEPG',
// 				'vAPP'
// 			],
// 			regionalDC: [],
// 			nationalDC: [
// 				'vHSS',
// 				'vMME'
// 			]
// 		}
// 	}
// ]