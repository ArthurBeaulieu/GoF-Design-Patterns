package gof;

import java.util.ArrayList;
import java.util.List;

public abstract class ObservableAdapter implements Observable {
	private List<Observateur> liste = new ArrayList<>();
	@Override
	public void inscrire(Observateur obs) {

		liste.add(obs);

	}

	public void desinscrire(Observateur obs) {

		liste.remove(obs);

	}
	public void notifier() {
		for(Observateur obs : liste)
			obs.actualiser(this);
	}

	@Override
	public abstract int getMesure();

}
