import * as THREE from 'three';
// 3d 모델을 표현하는 파일 포맷 : 확장자명 glb(binary - 모든 gltf를 변환해둔)
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { SampleModel } from './SampleModel';

// ----- 주제: 스크롤에 따라 움직이는 애니메이션

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		// alpha: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
	renderer.shadowMap.enabled = true; // 그림자가 생기도록
	renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 그림자 부드럽게

	// Scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color('yellow');

	// Camera
	const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 장면 비율
		0.1, // near(가까이 보이는 한계)
		1000 // far(멀리 보이는 한계)
	);
	camera.position.set(-5, 2, 25);
	scene.add(camera);

	// Light
	// 은은한 조명
	const ambientLight = new THREE.AmbientLight('white', 0.7);
	scene.add(ambientLight);
	// 스팟 조명
	const spotLight = new THREE.SpotLight('white', 0.7);
	spotLight.position.set(10, 25, 25);
	spotLight.castShadow = true;
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;
	spotLight.shadow.camera.near = 1;
	spotLight.shadow.camera.far = 200;
	scene.add(spotLight);

	// 커스텀 모델 로더
	const gltfLoader = new GLTFLoader();

	// Mesh
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(100, 100),
		new THREE.MeshStandardMaterial({
			color: 'gray'
		})
	);
	floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
	floor.position.set(0, 0, 0);
	floor.rotation.x = THREE.MathUtils.degToRad(-90);
	scene.add(floor);
	
	// 5개의 SampleModel 인스턴스를 만들어 sampleModels 배열에 넣어 두기 : y는 고정이라 안움직이니까 굳이 넣지 않았다. width, height, depth는 SampleModel에 이미 세팅이 되어있음.
	const sampleModels = [];
	sampleModels.push(new SampleModel({ modelSrc: '/models/iphone.glb',scene, gltfLoader, x: -5, z: 20 }));
	sampleModels.push(new SampleModel({ scene, gltfLoader, x: 7, z: 10 }));
	sampleModels.push(new SampleModel({ scene, gltfLoader, x: -10, z: 0 }));
	sampleModels.push(new SampleModel({ scene, gltfLoader, x: 10, z: -10 }));
	sampleModels.push(new SampleModel({ scene, gltfLoader, x: -5, z: -20 }));

	// scroll
	let scrollY = window.scrollY; // 스크롤 위치(픽셀)
	let currentSection = 0; // 현재 활성화된 섹션 번호

	function setSection() {
		scrollY = window.scrollY;
		// 스크롤 위치를 기준으로, 활성화시킬 섹션 번호를 세팅
		// 현재 스크롤 / 화면 높이 로 해서 index 계산.
		const newSection = Math.round(scrollY / window.innerHeight);
		
		if (newSection != currentSection) {
			// 섹션 번호가 바뀔 경우 애니메이션 재생
			// GSAP 라이브러리 이용 : 카메라 포지션을 이동! z는 +5 안하면 너무 제눈앞에있는거아니에요? 되니까 했다.
			currentSection = newSection;
			gsap.to(camera.position, { duration: 1, delay: 0, x: sampleModels[currentSection].x });
			gsap.to(camera.position, { duration: 1, delay: 0, z: sampleModels[currentSection].z + 5 });
			if (sampleModels[currentSection].mesh) {
				gsap.from(
					sampleModels[currentSection].mesh.rotation,
					{
						duration: 2,
						ease: 'power2.inOut',
						x: '+=0',
						y: '+=6.28',
						z: '+=0'
					}
				);
			}
		}
	}

	// const clock = new THREE.Clock();

	// 그리기
	function draw() {
		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}

	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	window.addEventListener('resize', setSize);
	window.addEventListener('scroll', setSection);

	setSection();
	draw();
}
