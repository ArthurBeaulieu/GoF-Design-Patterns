package gof;

public class Chocolat extends BonbonDecorator{

	public Chocolat(Bonbon component) {
		super(component);
	}

	@Override
	public String getGout() {
		// TODO Auto-generated method stub
		return getComponent().getGout() + " Chocolat";
	}

}
