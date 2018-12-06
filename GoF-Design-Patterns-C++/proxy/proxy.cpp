#include <iostream>

using namespace std;

class Service{
public:
	virtual void compute() = 0;
	virtual ~Service(){}
};

class ServiceImpl : public Service{
	void compute(){
		cout << "traitement dans ServiceImpl" << endl;
	}
};

class ServiceProxy : public Service{
	Service& service;
public:
	ServiceProxy(Service& service):service(service){}
	void compute(){
		cout << "avant traitement" << endl;
		service.compute();
		cout << "après traitement" << endl;
	}
};

int main(){
//	Service* service = new ServiceImpl();
	ServiceImpl impl;
	Service* service = new ServiceProxy(impl);
	service->compute();
	delete service;
}
