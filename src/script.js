let tileSize = 1200;
let surface = 1; // Domyślnie 1 dla polished

// Konfiguracje dostępności płytek (1 = dostępne, 0 = niedostępne)
const tileConfigurations = {
  "1200x600": [0, 0, 0, 1], // Kolejno: polished, lappato, matt, carving
  "600x600": [0, 0, 0, 0]   // Kolejno: polished, lappato, matt, carving
};

const Tile600x600 = document.getElementById('Tile600x600');
const Tile1200x600 = document.getElementById('Tile1200x600');
const valueDisplay = document.getElementById('tileSizeDisplay');

const polished = document.getElementById('polished');
const lappato = document.getElementById('lappato');
const matt = document.getElementById('matt');
const carving = document.getElementById('carving');

const surfaceDisplay = document.getElementById('surfaceDisplay');
const surfaceValueDisplay = document.getElementById('surfaceValue');

if (tileConfigurations["1200x600"][0] === 1) {
  tileSize = 1200;
  surface = 1;
  surfaceDisplay.textContent = "polished";
} else if (tileConfigurations["1200x600"][1] === 1) {
  tileSize = 1200;
  surface = 2;
  surfaceDisplay.textContent = "lappato";
} else if (tileConfigurations["1200x600"][2] === 1) {
  tileSize = 1200;
  surface = 3
  surfaceDisplay.textContent = "matt";
} else if (tileConfigurations["1200x600"][3] === 1) {
  tileSize = 1200;
  surface = 4
  surfaceDisplay.textContent = "carving";
} else if (tileConfigurations["600x600"][0] === 1) {
  tileSize = 600;
  surface = 1
  surfaceDisplay.textContent = "polished";
} else if (tileConfigurations["600x600"][1] === 1) {
  tileSize = 600;
  surface = 2
  surfaceDisplay.textContent = "lappato";
} else if (tileConfigurations["600x600"][2] === 1) {
  tileSize = 600;
  surface = 3
  surfaceDisplay.textContent = "matt";
} else if (tileConfigurations["600x600"][3] === 1) {
  tileSize = 600;
  surface = 4
  surfaceDisplay.textContent = "carving";
}

console.log(tileSize)
console.log(surface)

valueDisplay.textContent = tileSize

//Funkcja aktualizacji nieaktywnych przycisków wykończenia
const updateButtonDeactivation = () => {
  polished.classList.remove('disabled');
  lappato.classList.remove('disabled');
  matt.classList.remove('disabled');
  carving.classList.remove('disabled');
  if (tileSize === 1200){
    if (tileConfigurations["1200x600"][0] === 0) {
      polished.classList.add('disabled');
      }
    if (tileConfigurations["1200x600"][1] === 0) {
      lappato.classList.add('disabled');
      }
    if (tileConfigurations["1200x600"][2] === 0) {
      matt.classList.add('disabled');
      }
    if (tileConfigurations["1200x600"][3] === 0) {
      carving.classList.add('disabled');
      }
 } else if (tileSize === 600){
    if (tileConfigurations["600x600"][0] === 0) {
      polished.classList.add('disabled');
      }
    if (tileConfigurations["600x600"][1] === 0) {
      lappato.classList.add('disabled');
      }
    if (tileConfigurations["600x600"][2] === 0) {
      matt.classList.add('disabled');
      }
    if (tileConfigurations["600x600"][3] === 0) {
      carving.classList.add('disabled');
      }
 }
}

updateButtonDeactivation();

//Funkcja deaktywacji całego rozmiaru jeśli nie istnieje
const updateSizeDeactivation = () => {
    if (tileConfigurations["600x600"][0] === 0 &&
        tileConfigurations["600x600"][1] === 0 &&
        tileConfigurations["600x600"][2] === 0 &&
        tileConfigurations["600x600"][3] === 0) {
      Tile600x600.classList.add('disabled');
      }
    if (tileConfigurations["1200x600"][0] === 0 &&
        tileConfigurations["1200x600"][1] === 0 &&
        tileConfigurations["1200x600"][2] === 0 &&
        tileConfigurations["1200x600"][3] === 0) {
      Tile1200x600.classList.add('disabled');
      }
}

updateSizeDeactivation();

// Funkcja do aktualizacji podświetlenia przycisków
const updateButtonHighlight = () => {
  // Podświetlanie przycisków rozmiaru płytek
  if (tileSize === 1200) {
    Tile1200x600.classList.add('active');
    Tile600x600.classList.remove('active');
  } else if (tileSize === 600) {
    Tile600x600.classList.add('active');
    Tile1200x600.classList.remove('active');
  }

  // Podświetlanie przycisków wykończenia powierzchni
  polished.classList.remove('active');
  lappato.classList.remove('active');
  matt.classList.remove('active');
  carving.classList.remove('active');

  if (surface === 1) {
    polished.classList.add('active');
  } else if (surface === 2) {
    lappato.classList.add('active');
  } else if (surface === 3) {
    matt.classList.add('active');
  } else if (surface === 4) {
    carving.classList.add('active');
  }
};

// Obsługa przycisków rozmiaru płytek
Tile600x600.addEventListener('click', () => {
  tileSize = 600;
  valueDisplay.textContent = tileSize;
  if (tileConfigurations["600x600"][(surface-1)] === 0){
    if (tileConfigurations["600x600"][0] === 1) {
    surface = 1
    surfaceDisplay.textContent = "polished";
  } else if (tileConfigurations["600x600"][1] === 1) {
    surface = 2
    surfaceDisplay.textContent = "lappato";
  } else if (tileConfigurations["600x600"][2] === 1) {
    surface = 3
    surfaceDisplay.textContent = "matt";
  } else if (tileConfigurations["600x600"][3] === 1) {
    surface = 4
    surfaceDisplay.textContent = "carving";
  }
  }
  updateButtonHighlight(); // Zaktualizuj podświetlenie
  updateButtonDeactivation(); //Zaktualizuj nieistniejące wykończenia
});

Tile1200x600.addEventListener('click', () => {
  tileSize = 1200;
  valueDisplay.textContent = tileSize;
  if (tileConfigurations["1200x600"][(surface-1)] === 0){
    if (tileConfigurations["1200x600"][0] === 1) {
    surface = 1
    surfaceDisplay.textContent = "polished";
  } else if (tileConfigurations["1200x600"][1] === 1) {
    surface = 2
    surfaceDisplay.textContent = "lappato";
  } else if (tileConfigurations["1200x600"][2] === 1) {
    surface = 3
    surfaceDisplay.textContent = "matt";
  } else if (tileConfigurations["1200x600"][3] === 1) {
    surface = 4
    surfaceDisplay.textContent = "carving";
  }
  }
  updateButtonHighlight(); // Zaktualizuj podświetlenie
  updateButtonDeactivation(); //Zaktualizuj nieistniejące wykończenia
});

// Obsługa przycisków wykończenia powierzchni
polished.addEventListener('click', () => {
  surface = 1;
  surfaceDisplay.textContent = "polished";
  updateButtonHighlight(); // Zaktualizuj podświetlenie
});

lappato.addEventListener('click', () => {
  surface = 2;
  surfaceDisplay.textContent = "lappato";
  updateButtonHighlight(); // Zaktualizuj podświetlenie
});

matt.addEventListener('click', () => {
  surface = 3;
  surfaceDisplay.textContent = "matt";
  updateButtonHighlight(); // Zaktualizuj podświetlenie
});

carving.addEventListener('click', () => {
  surface = 4;
  surfaceDisplay.textContent = "carving";
  updateButtonHighlight(); // Zaktualizuj podświetlenie
});

// Inicjalizacja podświetlenia przy starcie
updateButtonHighlight();

const getNodeByName = (nodemap, nodename) => {
  return Object.values(nodemap).find((node) => {
    if (node.type === "MatrixTransform" && node.name === nodename) {
      return node;
    }
  });
};

// Funkcja do ukrywania wszystkich obiektów i pokazywania odpowiednich obiektów na podstawie zmiennej surface
const addClickEventM = (api, instanceIDsall, instanceIDsM1, instanceIDsM2, instanceIDsM3, instanceIDsM4) => {
  Tile600x600.addEventListener('click', () => {
    // Najpierw ukryj wszystkie obiekty z instanceIDsall
    instanceIDsall.forEach((instanceID) => {
      api.hide(instanceID);
    });

    // Następnie pokaż obiekty na podstawie wartości zmiennej surface
    if (surface === 1) {
      instanceIDsM1.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (surface === 2) {
      instanceIDsM2.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (surface === 3) {
      instanceIDsM3.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (surface === 4) {
      instanceIDsM4.forEach((instanceID) => {
        api.show(instanceID);
      });
    }
  }, { pick: "fast" });
};

// Funkcja do ukrywania wszystkich obiektów i pokazywania odpowiednich obiektów na podstawie zmiennej surface
const addClickEventD = (api, instanceIDsall, instanceIDsD1, instanceIDsD2, instanceIDsD3, instanceIDsD4) => {
  Tile1200x600.addEventListener('click', () => {
    // Najpierw ukryj wszystkie obiekty z instanceIDsall
    instanceIDsall.forEach((instanceID) => {
      api.hide(instanceID);
    });

    // Następnie pokaż obiekty na podstawie wartości zmiennej surface
    if (surface === 1) {
      instanceIDsD1.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (surface === 2) {
      instanceIDsD2.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (surface === 3) {
      instanceIDsD3.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (surface === 4) {
      instanceIDsD4.forEach((instanceID) => {
        api.show(instanceID);
      });
    }
  }, { pick: "fast" });
};

// Funkcja do ukrywania wszystkich obiektów i pokazywania odpowiednich obiektów na podstawie zmiennej surface
const addClickEvent1 = (api, instanceIDsall,  instanceIDsM1,  instanceIDsD1) => {
  polished.addEventListener('click', () => {
    // Najpierw ukryj wszystkie obiekty z instanceIDsall
    instanceIDsall.forEach((instanceID) => {
      api.hide(instanceID);
    });

    // Następnie pokaż obiekty na podstawie wartości zmiennej surface
    if (tileSize === 1200) {
      instanceIDsD1.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (tileSize === 600) {
      instanceIDsM1.forEach((instanceID) => {
        api.show(instanceID);
      });
    }
  }, { pick: "fast" });
};

// Funkcja do ukrywania wszystkich obiektów i pokazywania odpowiednich obiektów na podstawie zmiennej surface
const addClickEvent2 = (api, instanceIDsall,  instanceIDsM2,  instanceIDsD2) => {
  lappato.addEventListener('click', () => {
    // Najpierw ukryj wszystkie obiekty z instanceIDsall
    instanceIDsall.forEach((instanceID) => {
      api.hide(instanceID);
    });

    // Następnie pokaż obiekty na podstawie wartości zmiennej surface
    if (tileSize === 1200) {
      instanceIDsD2.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (tileSize === 600) {
      instanceIDsM2.forEach((instanceID) => {
        api.show(instanceID);
      });
    }
  }, { pick: "fast" });
};

// Funkcja do ukrywania wszystkich obiektów i pokazywania odpowiednich obiektów na podstawie zmiennej surface
const addClickEvent3 = (api, instanceIDsall,  instanceIDsM3,  instanceIDsD3) => {
  matt.addEventListener('click', () => {
    // Najpierw ukryj wszystkie obiekty z instanceIDsall
    instanceIDsall.forEach((instanceID) => {
      api.hide(instanceID);
    });

    // Następnie pokaż obiekty na podstawie wartości zmiennej surface
    if (tileSize === 1200) {
      instanceIDsD3.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (tileSize === 600) {
      instanceIDsM3.forEach((instanceID) => {
        api.show(instanceID);
      });
    }
  }, { pick: "fast" });
};

// Funkcja do ukrywania wszystkich obiektów i pokazywania odpowiednich obiektów na podstawie zmiennej surface
const addClickEvent4 = (api, instanceIDsall,  instanceIDsM4,  instanceIDsD4) => {
  carving.addEventListener('click', () => {
    // Najpierw ukryj wszystkie obiekty z instanceIDsall
    instanceIDsall.forEach((instanceID) => {
      api.hide(instanceID);
    });

    // Następnie pokaż obiekty na podstawie wartości zmiennej surface
    if (tileSize === 1200) {
      instanceIDsD4.forEach((instanceID) => {
        api.show(instanceID);
      });
    } else if (tileSize === 600) {
      instanceIDsM4.forEach((instanceID) => {
        api.show(instanceID);
      });
    }
  }, { pick: "fast" });
};

const success = (api) => {
  api.start(function () {
    api.addEventListener("viewerready", function () {
      api.getNodeMap(function (err, nodes) {
        const DuzaSpod_5 = getNodeByName(nodes, "DuzaSpod_5");
        const DuzaPolished_6 = getNodeByName(nodes, "DuzaPolished_6");
        const DuzaMatt_7 = getNodeByName(nodes, "DuzaMatt_7");
        const DuzaLappato_8 = getNodeByName(nodes, "DuzaLappato_8");
        const DuzaCarving_9 = getNodeByName(nodes, "DuzaCarving_9");
        const MalaSpod_0 = getNodeByName(nodes, "MalaSpod_0");
        const MalaPolished_1 = getNodeByName(nodes, "MalaPolished_1");
        const MalaMatt_2 = getNodeByName(nodes, "MalaMatt_2");
        const MalaLappato_3 = getNodeByName(nodes, "MalaLappato_3");
        const MalaCarving_4 = getNodeByName(nodes, "MalaCarving_4");

        // Teraz przekazujesz tablicę `instanceID` obiektów, które chcesz ukryć/pokazać
        const instanceIDsall = [
          DuzaSpod_5.instanceID, DuzaPolished_6.instanceID, DuzaMatt_7.instanceID, 
          DuzaLappato_8.instanceID, DuzaCarving_9.instanceID, MalaSpod_0.instanceID, 
          MalaPolished_1.instanceID, MalaMatt_2.instanceID, MalaLappato_3.instanceID, 
          MalaCarving_4.instanceID
        ];

        const instanceIDsD1 = [DuzaSpod_5.instanceID, DuzaPolished_6.instanceID];
        const instanceIDsD2 = [DuzaSpod_5.instanceID, DuzaLappato_8.instanceID];
        const instanceIDsD3 = [DuzaSpod_5.instanceID, DuzaMatt_7.instanceID];
        const instanceIDsD4 = [DuzaSpod_5.instanceID, DuzaCarving_9.instanceID];
        const instanceIDsM1 = [MalaSpod_0.instanceID, MalaPolished_1.instanceID];
        const instanceIDsM2 = [MalaSpod_0.instanceID, MalaLappato_3.instanceID];
        const instanceIDsM3 = [MalaSpod_0.instanceID, MalaMatt_2.instanceID];
        const instanceIDsM4 = [MalaSpod_0.instanceID, MalaCarving_4.instanceID];
        const instanceIDsM = [MalaSpod_0.instanceID, MalaPolished_1.instanceID, MalaMatt_2.instanceID, MalaLappato_3.instanceID, MalaCarving_4.instanceID];
        const instanceIDs2 = [DuzaLappato_8.instanceID, MalaLappato_3.instanceID];
        const instanceIDs3 = [DuzaMatt_7.instanceID, MalaMatt_2.instanceID];
        const instanceIDs4 = [
          DuzaSpod_5.instanceID, DuzaPolished_6.instanceID, DuzaMatt_7.instanceID, 
          DuzaLappato_8.instanceID, DuzaCarving_9.instanceID, MalaSpod_0.instanceID, 
          MalaPolished_1.instanceID, MalaMatt_2.instanceID, MalaLappato_3.instanceID, 
          MalaCarving_4.instanceID
        ];

        const instanceIDsP = [
          DuzaMatt_7.instanceID, DuzaLappato_8.instanceID, DuzaCarving_9.instanceID, 
          MalaSpod_0.instanceID, MalaPolished_1.instanceID, MalaMatt_2.instanceID, 
          MalaLappato_3.instanceID, MalaCarving_4.instanceID
        ];
        
        // Wywołanie funkcji z różnymi zestawami obiektów
        addClickEventM(api, instanceIDsall, instanceIDsM1, instanceIDsM2, instanceIDsM3, instanceIDsM4);   // M jak mała
        addClickEventD(api, instanceIDsall, instanceIDsD1, instanceIDsD2, instanceIDsD3, instanceIDsD4);  // D jak duża
        addClickEvent1(api, instanceIDsall, instanceIDsM1, instanceIDsD1);
        addClickEvent2(api, instanceIDsall, instanceIDsM2, instanceIDsD2);
        addClickEvent3(api, instanceIDsall, instanceIDsM3, instanceIDsD3);
        addClickEvent4(api, instanceIDsall, instanceIDsM4, instanceIDsD4);
        
        // Ukryj wszystkie obiekty
        instanceIDsall.forEach((instanceID) => {
          api.hide(instanceID);
        });

        // Pokaż obiekty na podstawie wartości zmiennej surface
        if (tileConfigurations["1200x600"][0] === 1) {
          instanceIDsD1.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["1200x600"][1] === 1) {
          instanceIDsD2.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["1200x600"][2] === 1) {
          instanceIDsD3.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["1200x600"][3] === 1) {
          instanceIDsD4.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["600x600"][0] === 1) {
          instanceIDsM1.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["600x600"][1] === 1) {
          instanceIDsM2.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["600x600"][2] === 1) {
          instanceIDsM3.forEach((instanceID) => {
            api.show(instanceID);
          });
        } else if (tileConfigurations["600x600"][3] === 1) {
          instanceIDsM4.forEach((instanceID) => {
            api.show(instanceID);
          });
        }
    
        // Przesuń obiekty
        instanceIDsall.forEach((instanceID) => {
          api.translate(instanceID, [0, -0.2*0, 0.15*2], {
            duration: 0.0,
            easing: 'easeLinear'
          }, function(err, translateTo) {
            if (!err) {
              window.console.log('Object has been translated to', translateTo);
            }
          });
        });

        // Obróć wszystkie obiekty
        instanceIDsall.forEach((instanceID) => {
          api.rotate(instanceID, [-1.0471975512*0, 1, 0, 0], {
            duration: 1.0,
            easing: 'easeOutQuad'
          }, function(err, rotateTo) {
            if (!err) {
              window.console.log('Object has been rotated according to', rotateTo);
            }
          });
        });
      });
    });
  });
};

const loadSketchfab = (sceneuid, elementId) => {
  const iframe = document.getElementById(elementId);
  const client = new Sketchfab("1.12.1", iframe);

  client.init(sceneuid, {
    success: success,
    error: () => console.error("Sketchfab API error"),
    ui_stop: 0,
    preload: 1,
    camera: 0
  });
};

loadSketchfab("277049db5b0043e38ef9dda7cf640094", "api-frame");