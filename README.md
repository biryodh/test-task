Test case 1:
-------------------------------------
Script ID	:	Dependendcies
	1	:	[2,5]
	2	:	[5]
	3	:	[]
	4	:	[1]
	5	:	[3]

Executed Order: [ 3, 5, 2, 1, 4 ]


Test case 2
-------------------------------------
Script ID	:	Dependendcies
	1	:	[5]
	2	:	[5,7]
	3	:	[2]
	4	:	[3,2]
	5	:	[]

Executed Order: [ 5, 1 ]
Either circular dependency Or some scripts are missing
Pending List:  [
  VulnerabilityScript { scriptId: 2, dependencies: [ 5, 7 ] },
  VulnerabilityScript { scriptId: 3, dependencies: [ 2 ] },
  VulnerabilityScript { scriptId: 4, dependencies: [ 3, 2 ] }
]


Test case 3 // Process 7 is removed from script 2 of Test case 2
-------------------------------------
Script ID	:	Dependendcies
	1	:	[5]
	2	:	[5]
	3	:	[2]
	4	:	[3,2]
	5	:	[]

Executed Order: [ 5, 1, 2, 3, 4 ]

Test case 4 // Circular dependency
-------------------------------------
Script ID	:	Dependendcies
	1	:	[2]
	2	:	[1,3]
	3	:	[4]
	4	:	[3,2]
	5	:	[]

Executed Order: [ 5 ]

Either circular dependency Or some scripts are missing
Pending List:  [
  VulnerabilityScript { scriptId: 1, dependencies: [ 2 ] },
  VulnerabilityScript { scriptId: 2, dependencies: [ 1, 3 ] },
  VulnerabilityScript { scriptId: 3, dependencies: [ 4 ] },
  VulnerabilityScript { scriptId: 4, dependencies: [ 3, 2 ] }
]


