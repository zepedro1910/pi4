package br.com.senac.boot;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

@EnableWebMvc
@Configuration
@ComponentScan(basePackages = "br.com.senac")
public class WebMvcConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		registry.addResourceHandler("*.html").addResourceLocations("/");
		registry.addResourceHandler("/PartialView/**").addResourceLocations("PartialView/");
		registry.addResourceHandler("/templates/**").addResourceLocations("resources/templates/");
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/").resourceChain(false).addResolver(new PathResourceResolver());
	}

}
