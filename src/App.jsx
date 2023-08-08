import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableItem from "./SortableItem.jsx";
import styled from "styled-components";

const StyledSortableContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-arround;
  width: 100%;
`;

function App() {
  const [languages, setLanguages] = useState(["C", "C++", "C#"]);

  const handleDragEnd = (event) => {
    console.log("Drag end called ");
    const { active, over } = event;
    console.log(" Active " + active.id + " Over " + over.id);
    if (active.id !== over.id) {
      console.log("Moving " + active.id + " to " + over.id);
      setLanguages((languages) => {
        const oldIndex = languages.indexOf(active.id);
        const newIndex = languages.indexOf(over.id);
        return arrayMove(languages, oldIndex, newIndex);
      });
    }
  };
  const deleteItem = (id) => {
    setLanguages(languages.filter((language) => language !== id));
  };

  return (
    <div>
      <p>{`{
  "name": "youtubednd",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "youtubednd",
      "version": "0.0.0",
      "dependencies": {
        "@dnd-kit/core": "^6.0.8",
        "@dnd-kit/sortable": "^7.0.2",
        "@dnd-kit/utilities": "^3.2.1",
        "@fortawesome/fontawesome-svg-core": "^6.4.2",
        "@fortawesome/free-solid-svg-icons": "^6.4.2",
        "@fortawesome/react-fontawesome": "^0.2.0",
        "bootstrap": "^5.3.1",
        "react": "^18.2.0",
        "react-bootstrap": "^2.8.0",
     
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.1.0.tgz",
      "integrity": "sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.11.tgz",
      "integrity": "sha512-dCwEFf0/oT85M1fHBg4F0jtLwJrutGoHSQXCh7u4o2t1drG+c0a9Flnqww6XUKSfQMPpJBRjU8d4RXB09qtvaA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "escalade": "^3.1.1",
        "picocolors": "^1.0.0"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uplot": {
      "version": "1.6.24",
      "resolved": "https://registry.npmjs.org/uplot/-/uplot-1.6.24.tgz",
      "integrity": "sha512-WpH2BsrFrqxkMu+4XBvc0eCDsRBhzoq9crttYeSI0bfxpzR5YoSVzZXOKFVWcVC7sp/aDXrdDPbDZGCtck2PVg=="
    },
    "node_modules/uplot-react": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/uplot-react/-/uplot-react-1.1.4.tgz",
      "integrity": "sha512-qO1UkQwjVKdj5vTm3O3yldvu1T6hwY4++rH4KznLhjqpnLdncq1zsRxq/zQz/HUHPVD0j7WBcEISbNM61JsuAQ==",
      "engines": {
        "node": ">=8.10"
      },
      "peerDependencies": {
        "react": ">=16.8.6",
        "uplot": "^1.6.7"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "4.4.9",
      "resolved": "https://registry.npmjs.org/vite/-/vite-4.4.9.tgz",
      "integrity": "sha512-2mbUn2LlUmNASWwSCNSJ/EG2HuSRTnVNaydp6vMCm5VIqJsjMfbIWtbH2kDuwUVW5mMUKKZvGPX/rqeqVvv1XA==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.18.10",
        "postcss": "^8.4.27",
        "rollup": "^3.27.1"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      },
      "peerDependencies": {
        "@types/node": ">= 14",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/warning": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",
      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",
      "dependencies": {
        "loose-envify": "^1.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.11.tgz",
      "integrity": "sha512-qe9UWWpkeG5yzZ0tNYxDmd7vo58HDBc39mZ0xWWpolAGADdFOzkfamWLDxkOWcvHQKVmdTyQdLD4NOfjLWTKew==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ=="
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
`}</p>
      <div>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleDragEnd(e)}
        >
          <StyledSortableContainer>
            <SortableContext
              items={languages}
              strategy={horizontalListSortingStrategy}
            >
              {languages.map((language) => (
                <SortableItem
                  numberOfGraphs={languages.length}
                  key={language}
                  id={language}
                  onDelete={deleteItem}
                />
              ))}
            </SortableContext>
          </StyledSortableContainer>
        </DndContext>
      </div>
      <p>{`{
  "name": "youtubednd",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "youtubednd",
      "version": "0.0.0",
      "dependencies": {
        "@dnd-kit/core": "^6.0.8",
        "@dnd-kit/sortable": "^7.0.2",
        "@dnd-kit/utilities": "^3.2.1",
        "@fortawesome/fontawesome-svg-core": "^6.4.2",
        "@fortawesome/free-solid-svg-icons": "^6.4.2",
        "@fortawesome/react-fontawesome": "^0.2.0",
        "bootstrap": "^5.3.1",
        "react": "^18.2.0",
        "react-bootstrap": "^2.8.0",
     
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.1.0.tgz",
      "integrity": "sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.11.tgz",
      "integrity": "sha512-dCwEFf0/oT85M1fHBg4F0jtLwJrutGoHSQXCh7u4o2t1drG+c0a9Flnqww6XUKSfQMPpJBRjU8d4RXB09qtvaA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "escalade": "^3.1.1",
        "picocolors": "^1.0.0"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uplot": {
      "version": "1.6.24",
      "resolved": "https://registry.npmjs.org/uplot/-/uplot-1.6.24.tgz",
      "integrity": "sha512-WpH2BsrFrqxkMu+4XBvc0eCDsRBhzoq9crttYeSI0bfxpzR5YoSVzZXOKFVWcVC7sp/aDXrdDPbDZGCtck2PVg=="
    },
    "node_modules/uplot-react": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/uplot-react/-/uplot-react-1.1.4.tgz",
      "integrity": "sha512-qO1UkQwjVKdj5vTm3O3yldvu1T6hwY4++rH4KznLhjqpnLdncq1zsRxq/zQz/HUHPVD0j7WBcEISbNM61JsuAQ==",
      "engines": {
        "node": ">=8.10"
      },
      "peerDependencies": {
        "react": ">=16.8.6",
        "uplot": "^1.6.7"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "4.4.9",
      "resolved": "https://registry.npmjs.org/vite/-/vite-4.4.9.tgz",
      "integrity": "sha512-2mbUn2LlUmNASWwSCNSJ/EG2HuSRTnVNaydp6vMCm5VIqJsjMfbIWtbH2kDuwUVW5mMUKKZvGPX/rqeqVvv1XA==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.18.10",
        "postcss": "^8.4.27",
        "rollup": "^3.27.1"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      },
      "peerDependencies": {
        "@types/node": ">= 14",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/warning": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",
      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",
      "dependencies": {
        "loose-envify": "^1.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.11.tgz",
      "integrity": "sha512-qe9UWWpkeG5yzZ0tNYxDmd7vo58HDBc39mZ0xWWpolAGADdFOzkfamWLDxkOWcvHQKVmdTyQdLD4NOfjLWTKew==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ=="
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
`}</p>
    </div>
  );
}

export default App;
