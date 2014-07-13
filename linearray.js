//i want to go from w=>linearray[1][1]
//perhaps have cache of node edges on client side
//direction- 1: s->t | 2: s<-t | 3: s<->t | 4: s-t
/*
mapping(node to edge join): 
	maintain 'pool' of existing nodes
	loop through edges array
			add endpts as entries to map array indexes with edge index as value. sorta like inverting index and value
			remove nodes from pool
	any nodes left are then appended to the end of map as they represent non traversable vertexes in graph
*/
data = 
{
	"graph":{
		"author":["stan", "bob", "joe"],
		"title":"example graph"
	},
	"nodes":
		[
			{"id":0, "coord":[1,2],"text":"aaa"},
			{"id":1, "coord":[3,4],"text":"bbb"},
			{"id":2, "coord":[5,6],"text":"ccc"}
		],
	"edges":
		[
			{"id":0, 
			 "endpt1":0, "endpt2":1, 
			 "direction":1, "text":"zzz"
			},
			{"id":1, 
			 "endpt1":1, "endpt2":2, 
			 "direction":3, "text":"yyy"
			}
		],
	"map":
		[
			{"node":0,'edge':[0]},
			{"node":1,'edge':[0, 1]},
			{"node":2,'edge':[1]},

		]
};
console.log(data);