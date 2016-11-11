package org.dgo.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/test")
public class testController {
	@GET
	@Produces("text/plain")
	public String sayHelloWorld() {
		return "Hello world";
	}
}
