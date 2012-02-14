define [
  'jQuery',
  'Underscore', 
  'Backbone',
], ($, _, Backbone) ->
  "use strict"
  class ThreeNodes.CreateNodeCommand
    execute: (nodename, nodetype, dx = 0, dy = 0) ->
      # alert nodename + " "+nodetype
      injector = @context.injector
      ng = injector.get("NodeGraph")
      ng.create_node(nodename, nodetype, dx, dy)
