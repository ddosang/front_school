import * as THREE from 'three';

// ----- 주제: 기본 장면 구성

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		// canvas의 속성을 canvas로 지정, antialias : 그림의 계단 현상을 부드럽게
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원 : 너무 고해상도까지 지원하면 크기가 n배가 되어서 성능이 떨어짐.. 2배까지만!
	renderer.shadowMap.enabled = true; // 그림자가 생기도록

	// Scene
	const scene = new THREE.Scene();
	// 배경색 설정
	scene.background = new THREE.Color('white');

	// Camera(카메라)
	const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 장면 비율
		0.1, // near(가까이 보이는 한계)
		1000 // far(멀리 보이는 한계)
		// near 안쪽, far 바깥쪽은 아예 안보여준다. 성능을 위해서.
	);
	camera.position.set(0, 1, 5); // 카메라 위치 (x, y, z) 
	// object를 원점에 두고 카메라를 조정하는게 편하다.
	scene.add(camera);

	// Light(조명)
	// 은은한 조명 : ambient는 단독으로는 잘 안쓰고 보조로 쓴다.
	const ambientLight = new THREE.AmbientLight('white', 0.5); // 색상, 강도
	scene.add(ambientLight);
	// 스팟 조명 : 뮤지컬처럼!
	const spotLight = new THREE.SpotLight('white', 0.7); // 색상, 강도
	spotLight.position.set(-2, 5, 3);
	spotLight.castShadow = true; // 그림자를 만들 수 있도록
	spotLight.shadow.mapSize.width = 1024; // 그림자 해상도
	spotLight.shadow.mapSize.height = 1024;
	scene.add(spotLight);

	// Mesh : 바닥, 돌아가는 연두색 박스
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(5, 5),
		new THREE.MeshStandardMaterial({
			color: 'lightgray'
		})
	);
	floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
	floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도

	const box = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshStandardMaterial({
			color: 'limegreen'
		})
	);
	box.castShadow = true; // 그림자를 만들 수 있도록
	box.position.y = 0.5;

	scene.add(floor, box);

	// 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 three.js에서 제공하는 Clock 사용
	const clock = new THREE.Clock();

	// 빠르게 반복 실행 되는 그리기 함수 : 1초에 nn번 반복되어서 움직이는 것처럼 보이게.
	// threejs의 requestAnimationFrame 같은 것. 
	// VR 같은 것은 setAnimationLoop를 써야해서 requestAnimationFrame을 쓰지 않음.
	function draw() {
		const delta = clock.getDelta(); // draw 실행 시간 간격
		// const time = clock.getElapsedTime(); // 총 경과 시간

		box.rotation.y += delta;
		// box.rotation.y += 0.01;
		// 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 Clock의 delta 사용 : 프로그램이 무겁거나 하면 1초당 nn번을 다 돌지 못할수도 있으니까 성능 보정을 위해 delta 사용.

		// 렌더링
		renderer.render(scene, camera);
		// draw 함수 반복 실행
		renderer.setAnimationLoop(draw);
	}

	// 캔버스 사이즈를 브라우저 창 사이즈에 맞추기 : 브라우저 크기가 바뀔때도 호출
	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	// 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
	window.addEventListener('resize', setSize);

	draw();
}
