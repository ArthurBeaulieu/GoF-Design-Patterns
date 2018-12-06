package gof;

public class Orange extends BonbonDecorator{

	public Orange(Bonbon component) {
		super(component);
	}

@Override
	public String getGout() {
		// TODO Auto-generated method stub
		return getComponent().getGout() + " Orange";
	}

}
