#include <iostream>

using namespace std;

class Logger{
	Logger* nextLogger;
	int priority;
protected:
	virtual void write(string message)=0;
public:
	Logger(int priority):nextLogger(nullptr),priority(priority){}
	virtual ~Logger(){};
	void setLogger(Logger& logger){
		nextLogger = &logger;
	}

	void log(int level, string message){
		if(level <= this->priority)
		write(message);
		if(nextLogger!=nullptr){
			nextLogger->log(level,message);
		}
	}
};

class EmailLogger : public Logger{
	void write(string message){
		cout << "EmailLogger : " << message <<endl;
	}
public:
	EmailLogger(int priority):Logger(priority){}
};

class ScreenLogger : public Logger{
	void write(string message){
		cout << "ScreenLogger : " << message <<endl;
	}
public:
	ScreenLogger(int priority):Logger(priority){}
};

class SmsLogger : public Logger{
	void write(string message){
		cout << "SmsLogger : " << message <<endl;
	}
public:
	SmsLogger(int priority):Logger(priority){}
};

int main(){
	SmsLogger l1(1);
	ScreenLogger l2(3);
	EmailLogger l3(2);

	l1.setLogger(l2);
	l2.setLogger(l3);

	l1.log(2,"message 1");
}
