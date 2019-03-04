var w = 500;
var h = 200;

Wins = [
  {"runs":876, "runs_against":647},
  {"runs":797, "runs_against":534},
  {"runs":851, "runs_against":669},
  {"runs":813, "runs_against":674},
  {"runs":754, "runs_against":659},
  {"runs":761, "runs_against":645},
  {"runs":804, "runs_against":610},
  {"runs":818, "runs_against":648},
  {"runs":780, "runs_against":745},
  {"runs":759, "runs_against":657},
  {"runs":716, "runs_against":646},
  {"runs":677, "runs_against":711},
  {"runs":759, "runs_against":691},
  {"runs":692, "runs_against":693},
  {"runs":693, "runs_against":644},
  {"runs":771, "runs_against":682},
  {"runs":721, "runs_against":722},
  {"runs":677, "runs_against":728},
  {"runs":738, "runs_against":775},
  {"runs":676, "runs_against":707},
  {"runs":603, "runs_against":699},
  {"runs":709, "runs_against":832},
  {"runs":696, "runs_against":819},
  {"runs":737, "runs_against":848},
  {"runs":617, "runs_against":767},
  {"runs":630, "runs_against":796},
  {"runs":589, "runs_against":809},
  {"runs":656, "runs_against":848},
  {"runs":617, "runs_against":767},
  {"runs":630, "runs_against":796},
  {"runs":589, "runs_against":809},
  {"runs":656, "runs_against":848},
  {"runs":638, "runs_against":833},
  {"runs":622, "runs_against":892}
];

var svg = d3.select("body")
            .append("svg")
            .attr({width:w, height:h});

svg.selectAll("circle")
   .data(Wins)
   .enter()
   .append("circle")
   .attr({
     cx:function(d){
       return d.runs*4.7
     },
     cy:function(d){
       return h-d.runs_against
     },
     r:5,
     "fill":"blue"
   })


  svg.selectall("teext")
     .data(Wins)
     .enter()
     .append("text")
     .text(function(d){
       return d.runs_against
     })
     .attr({
       cx:function(d){
         return d.runs*4.7
       },
       cy:function(d){
         return h-d.runs_against
       },
       r:5,
       "fill":"blue"
     })
