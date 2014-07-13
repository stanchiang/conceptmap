edges = {
	"line0": 
		[
			{"node0":[1,2],"text":"aaa"},
			{"node1":[3,4],"text":"bbb"}
		],
	"line1": 
		[
			{"node0":[1,2],"text":"aaa"},
			{"node1":[3,4],"text":"bbb"}
		]
};

console.log(example.edges[1].node1);

//i want to go from 'w'=>'linearray[1][1]'

/*
edges
	edgenum
	edgetext
	endpointnode1name
	endpointnode2name
	direction

nodes
	nodenum
	nodetext
	coord_x
	coord_y
*/