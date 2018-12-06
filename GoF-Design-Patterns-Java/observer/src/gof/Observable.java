package gof;

public interface Observable {
	void inscrire(Observateur sonde);

	abstract void desinscrire(Observateur sonde);

	abstract void notifier();

	int getMesure();

}
