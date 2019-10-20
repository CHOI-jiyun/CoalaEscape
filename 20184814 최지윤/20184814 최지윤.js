room = game.createRoom("room", "office2_.png"); // 방 생성
room2 =game.createRoom("room2","office2_.png"); // 두번째 방 생성
room3 = game.createRoom("room3","배경-3.png");  //세번째 방 생성

//첫번째 방의 첫번째 문
room.door = room.createObject("door", "MetalDoor-SW-Close.png"); // 첫번째 방의 문 생성
room.door.setWidth(136);
room.locateObject(room.door, 1030, 300);
room.door.lock();
room.door.onUnlock = function() {
	room.door.open();
	room.door.setSprite("MetalDoor-SW-Open.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}

//첫번째 방의 두번째 문
room.door2 = room.createObject("door2", "MetalDoor-SW-Open-2.png"); // 첫번째 방의 문 생성
room.door2.setWidth(136);
room.locateObject(room.door2, 250, 300);
room.door2.unlock();
room.door2.open();



//첫번째 방의 키패드
room.keypad2 = room.createObject("keypad2", "keypad2-sw.png");
room.keypad2.setWidth(36);
room.locateObject(room.keypad2, 935, 250);
room.keypad2.onClick = function() {
	printMessage("문을 열 수 있는 비밀번호가 필요해.");
	showKeypad("number", "9563" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}

//첫번째방의 금고 설치
room.locker = room.createObject("locker","금고-close.png");
room.locker.setWidth(200);
room.locateObject(room.locker, 550 , 250);
room.locker.lock();
room.locker.close();


//전화기 생성
room.tele =room.createObject("tele","전화기.png");
room.tele.setWidth(30);
room.locateObject(room.tele,880,200);
room.tele.onClick = function(){
	printMessage("전화선이 끊긴 거 같다.. 무슨 용도일까..?")
	showKeypad("telephone", "5697" , function(){ // 키패드 1 - 숫자4자리
		room.locker.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
		room.locker.setSprite("금고-open.png");
		room.locker.open();
	 });
}

//금고 비밀번호 생성
room.locker.onClick = function() {
	if(room.locker.isClosed()){
	printMessage("금고를 열 수 있는 방법이 필요해... 열쇠가 어디 없을까..?");
	}
	 else {
		 printMessage("지하실로 내려가는 길이 나왔다 !!");
		 room.locker.onClick =function(){
			 if(room.locker.isOpened()){
				 game.move(room3);
				 printMessage("지하실로 내려왔다.");
			 }
		 }
	 }
	 
}

//마우스 생성 숨김
room2.mouse = room2.createObject("mouse","마우스.png");
room2.mouse.hide();


//첫번째 방 화분 생성
room.flower =room.createObject("flower","화분.png");
room.flower.setWidth(150);
room.locateObject(room.flower,460,380);
room.flower.onClick = function(){
	room2.mouse.pick();
			printMessage("마우스를 찾았다 !!");
}

//지하실 창문 생성
room3.window = room3.createObject("window","지하실창문.png");
room3.window.setWidth(350);
room3.locateObject(room3.window,900,200);

//두번째 방의 문
room2.door = room2.createObject("door", "MetalDoor-SW-Close.png"); //두번째 방의 문 생성
room2.door.setWidth(136);
room2.locateObject(room2.door, 1030, 300);
room2.door.lock();
room2.door.onUnlock = function() {
	room2.door.open();
	room2.door.setSprite("MetalDoor-SW-Open.png");
    printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}



//두번째 방의 키패드
room2.keypad2 = room2.createObject("keypad2", "keypad2-sw.png");
room2.keypad2.setWidth(36);
room2.locateObject(room2.keypad2, 935, 250);
room2.keypad2.onClick = function() {
	printMessage("문을 열 수 있는 비밀번호가 필요해.");
	showKeypad("number", "3758" , function(){ // 키패드 1 - 숫자4자리
		room2.door.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}

//room2의 코너책상
room2.desk = room2.createObject("desk","책상.png");
room2.desk.setWidth(550);
room2.locateObject(room2.desk,620,295);



//프린터기 생성
room2.printer = room2.createObject("printer","프린터.png");
room2.printer.setWidth(100);
room2.locateObject(room2.printer,480,250);
room2.printer.close();
room2.printer.onClick = function() {
	if(room2.printer.isClosed()){
		printMessage("프린터에 암호가 걸려있다.");
		showKeypad("number", "5347" , function(){ // 키패드 1 - 숫자4자리
			printMessage("인쇄가 예약되어 있다. 인쇄를 해볼까 ?");
			room2.printer.open();
			//room2.paper = room2.createObject("paper","paper.png");
			
	 });}
	 else if(room2.printer.isOpened()) {
		room2.paper = room2.createObject("paper","종이.png");
		room2.paper.setWidth(40);
		room2.locateObject(room2.paper,560,240);
		room2.printer.lock();
		room2.paper.onClick = function(){
			showImageViewer("종이.png","");
		}
	 }
}

//무지개 생성
room2.rainbow =room2.createObject("rainbow","무지개.png");
room2.rainbow.setWidth(180);
room2.locateObject(room2.rainbow,350,150);
room2.rainbow.onClick = function(){
	printMessage("파,노,초..보 ?? 이상한 무지개다..");
}

//컴퓨터 생성
room2.computer = room2.createObject("computer","컴퓨터.png");
room2.computer.setWidth(120);
room2.locateObject(room2.computer,660,180);
room2.computer.onClick = function(){
	if(game.getHandItem() == room2.mouse){
		showImageViewer("화면.png","");
	}
	else {
		printMessage("작동을 위해서는 마우스가 필요해보인다..");
	}
}

//서랍장 + 드라이버 생성 + 라디오 수리
room2.dresser =room2.createObject("dresser","서랍장.png");
room2.dresser.setWidth(300);
room2.locateObject(room2.dresser,250,482);
room2.dresser.close();
room2.dresser.onClick = function(){
	if(room2.dresser.isClosed()){
		room2.dresser.setSprite("서랍장2.png");
		room2.dresser.open();
		room2.head = room2.createObject("head","드라이버.png");
		room2.head.setWidth(50);
		room2.locateObject(room2.head,297,510);
		room2.head.onClick = function(){
			room2.head.pick();
			printMessage("드라이버를 주웠다.");
			room2.dresser.open();
			room2.radio.onClick = function(){
				if(game.getHandItem() == room2.head){
					room2.radio.open();
					printMessage("라디오가 작동한다.");
					room2.radio.onClick = function(){
						if (room2.radio.isOpened()){
							showAudioPlayer("mos.wav");
							printMessage("뭔가 재생된다 !");
						}
					}
				}
				else {
					printMessage("나사가 헐거워져있다..");
				}
			}
		}
	}
	else if(room2.dresser.isOpened()){
		room2.dresser.setSprite("서랍장.png");
	}
}



//라디오 생성
room2.radio =room2.createObject("radio","라디오.png");
room2.radio.setWidth(100);
room2.locateObject(room2.radio,215,340);
room2.radio.close();
room2.radio.onClick = function(){
	printMessage("나사가 헐거워져있다..");
}


//지하실 침대, 가구 생성
room3.bed = room3.createObject("bed","침대.png");
room3.bed.setWidth(500);
room3.locateObject(room3.bed,780,550);

room3.shelf = room3.createObject("shelf","서랍.png");
room3.shelf.setWidth(200);
room3.locateObject(room3.shelf,105,360);

room3.chair = room3.createObject("chair","흔들의자.png");
room3.chair.setWidth(250);
room3.locateObject(room3.chair,1115,630);



// 지하실 박스 생성
room3.box1 = room3.createObject("box1","상자1.png");
room3.box1.setWidth(80);
room3.locateObject(room3.box1,250,150);

room3.box2 = room3.createObject("box2","상자2.png");
room3.box2.setWidth(80);
room3.locateObject(room3.box2,350,150);

room3.box3 = room3.createObject("box3","상자3.png");
room3.box3.setWidth(80);
room3.locateObject(room3.box3,450,150);

room3.box6 = room3.createObject("box6","상자6.png");
room3.box6.setWidth(80);
room3.locateObject(room3.box6,450,250);

room3.box5 = room3.createObject("box5","상자5.png");
room3.box5.setWidth(80);
room3.locateObject(room3.box5,350,250);

room3.box4 = room3.createObject("box4","상자4.png");
room3.box4.setWidth(80);
room3.locateObject(room3.box4,250,250);

room3.box7 = room3.createObject("box7","상자7.png");
room3.box7.setWidth(80);
room3.locateObject(room3.box7,250,350);

room3.box8 = room3.createObject("box8","상자8.png");
room3.box8.setWidth(80);
room3.locateObject(room3.box8,350,350);

room3.box9 = room3.createObject("box9","상자9.png");
room3.box9.setWidth(80);
room3.locateObject(room3.box9,450,350);

room3.box9.onClick =function(){
	showImageViewer("일기9.png","");
}

room3.box5.onClick =function(){
	showImageViewer("일기5.png","");
}

room3.box3.onClick =function(){
	showImageViewer("일기3.png","");
}

room3.box6.onClick =function(){
	showImageViewer("일기6.png","");
}

//room2에서 room으로 이동
room2.door.onClick = function(){
	if(room2.door.isOpened()){
	game.move(room);
	} else {
		printMessage("문은 잠겨있다.");
	}
}

//지하실에서 room으로 이동
room3.window.onClick = function(){
	game.move(room);
	
}

//room에서 room2로 이동
room.door2.onClick = function(){
    if(room.door2.isOpened()){
        game.move(room2);
    }
}

//탈출 
room.door.onClick = function(){
	if(room.door.isOpened()){
	game.clear();
	} else {
		printMessage("문은 잠겨있다.");
	}
}

game.start(room2); // 게임시작
printMessage("첫 번째 방탈출 게임에 오신 것을 환영합니다!\n단서를 찾아 탈출에 성공하시길 바랍니다!");