//i want to go from w=>linearray[1][1]
//direction- 1: s->t | 2: s<-t | 3: s<->t | 4: s-t
data = {
	"author":["stan", "bob", "joe"],
	"title":"example graph",
	"nodes":[
		{"id":0, "coord":[1,2],'edge':[0], 		"text":"aaa"},
		{"id":1, "coord":[3,4],'edge':[0, 1], "text":"bbb"},
		{"id":2, "coord":[5,6],'edge':[1], 		"text":"ccc"}
	],
	"edges":[
		{"id":0, 
		 "endpt1":0, "endpt2":1, 
		 "direction":1, "text":"zzz"
		},
		{"id":1, 
		 "endpt1":1, "endpt2":2, 
		 "direction":3, "text":"yyy"
		}
	]
};
console.log(data);