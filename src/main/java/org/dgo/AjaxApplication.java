package org.dgo;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class AjaxApplication extends ResourceConfig{

	public AjaxApplication() {
		packages("org.dgo.controller");
	}

}
