//i want to go from w=>linearray[1][1]
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
			{"id":0, 
			 "endpt1":1, "endpt2":2, 
			 "direction":3, "text":"yyy"
			}
		]
};
console.log(data);