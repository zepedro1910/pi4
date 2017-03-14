package br.com.senac.resource;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.senac.domain.Pessoa;
import br.com.senac.service.PessoaService;

@RestController
@RequestMapping("/pessoa")
public class PessoaResource {

	private final PessoaService pessoaService;

	@Inject
	public PessoaResource(final PessoaService pessoaService) {
		super();
		this.pessoaService = pessoaService;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<Pessoa> listPessoas() {
		return pessoaService.all();
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public void save(@RequestBody final Pessoa pessoa) {
		pessoaService.save(pessoa);
	}

}
