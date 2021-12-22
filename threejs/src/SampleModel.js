export class SampleModel {
	constructor(info = {}) {
		this.scene = info.scene;
		this.gltfLoader = info.gltfLoader;
		// 안들어오면 1 2 0.2로 설정되게!
		this.width = info.width || 1;
		this.height = info.height || 2;
		this.depth = info.depth || 0.2;

		this.x = info.x || 0;
		this.y = info.y || this.height * 0.5;
		this.z = info.z || 0;

		// 전부 아이폰이 아니라 model을 하나씩 조정할 수 있게 변경!
		// 모델 자체에 애니메이션을 등록할 수도 있음.
		this.modelSrc = info.modelSrc || '/models/iphone.glb';

		this.rotationY = info.rotationY || 0;

		this.gltfLoader.load(
			this.modelSrc,
			gltf => {
				this.mesh = gltf.scene.children[0];
				// this.mesh.scale.set(2,2,2) // 2배씩 키움. 이런것도 하드코딩 하지 말고 세팅하게 바꿀 수 있다.
				this.mesh.castShadow = true; // 그림자.
				this.mesh.rotation.y = this.rotationY;
				this.mesh.position.set(this.x, this.y, this.z);
				this.scene.add(this.mesh);
			}
		);
	}
}
