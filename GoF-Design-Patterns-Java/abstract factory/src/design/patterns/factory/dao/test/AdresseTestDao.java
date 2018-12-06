package design.patterns.factory.dao.test;

import java.util.ArrayList;
import java.util.List;

import design.patterns.factory.dao.AdresseDAO;
import design.patterns.factory.metier.Adresse;

public class AdresseTestDao implements AdresseDAO {

	@Override
	public List<Adresse> getAllAdresses() {
		return new ArrayList<Adresse>();
	}

}
