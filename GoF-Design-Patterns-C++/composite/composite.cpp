#include <iostream>
#include <vector>

using namespace std;

class Component{
public:
	virtual void show() = 0;
	virtual ~Component(){};
};

class Container:public Component{
protected:
	vector<Component*> components;
public:
	void show(){
		for(vector<Component*>::iterator it = components.begin() ; it != components.end(); ++it){
			(*it)->show();
		}
	}
	void add(Component* c){
		components.push_back(c);
	}
};

class Img:public Container{
public:
	void show(){
		cout<<"<img src='...'/>"<<endl;
	}
};

class Body:public Container{
public:
	void show(){
		cout<<"<body>"<<endl;
		for(vector<Component*>::iterator it = components.begin() ; it != components.end(); ++it){
			(*it)->show();
		}
		cout<<"</body>"<<endl;
	}
};

class Div:public Container{
public:
	void show(){
		cout<<"<div>"<<endl;
		for(vector<Component*>::iterator it = components.begin() ; it != components.end(); ++it){
			(*it)->show();
		}
		cout<<"</div>"<<endl;
	}
};

int main(){
	Img img;
	Div div1;
	Div div2;
	div2.add(&img);
	Body body;
	body.add(&div1);
	body.add(&div2);
	body.show();
}
