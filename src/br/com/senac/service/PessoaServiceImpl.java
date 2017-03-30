package br.com.senac.service;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import br.com.senac.domain.Pessoa;
import br.com.senac.repository.PessoaRepository;

@Service
public class PessoaServiceImpl implements PessoaService {

	private final PessoaRepository pessoaRepository;

	@Inject
	public PessoaServiceImpl(final PessoaRepository pessoaRepository) {
		super();
		this.pessoaRepository = pessoaRepository;
	}

	@Override
	public List<Pessoa> all() {
		return pessoaRepository.allPessoas();
	}

	@Override
	public void save(final Pessoa pessoa) {

		pessoaRepository.savePessoa(pessoa);
	}

	@Override
	public List<Pessoa> findUser(Map<String, Object> map) {

		int fistItem = (int) map.get("fistItem");
		int lastItem = (int) map.get("itemsPerPage");

		String name = null;
		String cpf = null;

		if (map.containsKey("name")) {
			name = (String) map.get("name");
		}
		if (map.containsKey("cpf")) {
			cpf = (String) map.get("cpf");
		}
		return pessoaRepository.findUser(fistItem, lastItem, name, cpf);
	}

}
