import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Modal, Button } from 'react-bootstrap'; // Используем модальное окно из bootstrap
import { FaQuestionCircle } from 'react-icons/fa'; // Иконка вопроса

const CarModel = () => {
  const mountRef = useRef(null);
  const [carColor, setCarColor] = useState(0xff1090); // Цвет машины
  const [showHelp, setShowHelp] = useState(false); // Состояние для отображения модального окна
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    // Создание сцены
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10); // Позиционирование камеры
    cameraRef.current = camera; // Сохраняем ссылку на камеру

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Добавляем свет
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Загрузка модели
    const loader = new GLTFLoader();
    loader.load(
      '/Assets/pessima_broken.glb',
      (gltf) => {
        const car = gltf.scene;

        // Применяем цвет ко всем мешам
        car.traverse((child) => {
          if (child.isMesh) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  mat.color.setHex(carColor);
                }
              });
            } else if (child.material && child.material instanceof THREE.MeshStandardMaterial) {
              child.material.color.setHex(carColor);
            }
          }
        });

        car.scale.set(2, 2, 2); 
        car.position.set(0, 2, 0); 
        scene.add(car); 
      },
      undefined,
      (error) => {
        console.error('Ошибка при загрузке модели:', error);
      }
    );

    // Настройка OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; 
    controlsRef.current = controls;

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, [carColor]);

  // Обработчик для изменения курсора
  const handleMouseDown = () => {
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    document.body.style.cursor = 'default';
  };

  // Обработчик для управления зумом
  const handleWheel = (event) => {
    const controls = controlsRef.current;
    if (controls) {
      controls.enableZoom = true;
      if (event.deltaY > 0) {
        controls.dollyIn(1.1); // Приближение
      } else {
        controls.dollyOut(1.1); // Отдаление
      }
      controls.update();
    }
  };

  // Открытие/закрытие окна помощи
  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '8px',
          cursor: 'grab',
          overflow: 'hidden',
          margin: '0 auto',
          position: 'relative',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel} // Добавляем обработчик прокрутки
      />
      
      {/* Иконка помощи в углу */}
      <FaQuestionCircle 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '24px',
          cursor: 'pointer',
          color: '#555',
        }}
        onClick={handleHelpClick}
      />

      {/* Модальное окно с подсказкой */}
      <Modal show={showHelp} onHide={handleHelpClick}>
        <Modal.Header closeButton>
          <Modal.Title>3D Model Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <p>
    This is a 3D model of a car, created in Blender and imported using Three.js.
  </p>
  <p>
    To control the model, use:
    <ul>
      <li><strong>Left mouse button:</strong> rotate the model</li>
      <li><strong>Right mouse button:</strong> move the camera</li>
      <li><strong>Mouse wheel:</strong> zoom (in/out)</li>
    </ul>
  </p>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHelpClick}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CarModel;