package br.com.senac.service;

import java.util.List;

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

}
