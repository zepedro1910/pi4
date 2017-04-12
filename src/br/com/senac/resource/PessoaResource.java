package br.com.senac.resource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.senac.domain.Estados;
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

	@RequestMapping(value = "/findUser", method = RequestMethod.POST)
	public List<Pessoa> findBy(@RequestBody final Map<String, Object> map) {
		return pessoaService.findUser(map);
	}

	@RequestMapping(value = "/countUser", method = RequestMethod.POST)
	public Integer countUser(@RequestBody final Map<String, Object> map) {
		return pessoaService.countUser(map);
	}

	@RequestMapping(value = "/listEstate", method = RequestMethod.GET)
	public List<Map<String, Object>> getAllState() {
		List<Map<String, Object>> mapList = new ArrayList<>();
		Arrays.asList(Estados.values()).stream().forEach(m -> {
			Map<String, Object> map = new HashMap<>();
			map.put("state", m);
			map.put("abrev", m.getAbrev());
			mapList.add(map);
		});
	return mapList;
	}
}
