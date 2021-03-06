require(["twig"], function(Twig) {
var myTemplates = {};
myTemplates["test/fixtures/conditional.twig"] = Twig.twig({ data: [{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"value","match":["value"]}],"output":[{"type":"raw","value":"  "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"value","match":["value"]}]},{"type":"raw","value":"\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"  No value\n"}]}}] });
myTemplates["test/fixtures/greeting.twig"] = Twig.twig({ data: [{"type":"raw","value":"Hello, "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"firstName","match":["firstName"]}]},{"type":"raw","value":" "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"lastName","match":["lastName"]}]},{"type":"raw","value":"!\n"}] });
myTemplates["test/fixtures/weather.twig"] = Twig.twig({ data: [{"type":"raw","value":"The weather today is "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"weather","match":["weather"]}]},{"type":"raw","value":".\n"}] });
});
