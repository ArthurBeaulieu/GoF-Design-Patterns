package gof;

public abstract  class BonbonDecorator implements Bonbon{
	private Bonbon component;

	public BonbonDecorator(Bonbon component) {
		this.component = component;
	}

	public Bonbon getComponent() {
		return component;
	}

}
