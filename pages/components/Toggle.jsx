import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

function Toggle() {
  const [selected, setSelected] = useState(false);
  const [cselected, csetSelected] = useState(false);

  const li = () => {
    setSelected(true);
    csetSelected(false);
  };
  const cr = () => {
    setSelected(false);
    csetSelected(true);
  };
  return (
    <div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={() => li()}>
          {" "}
          Linear Dendrogram{" "}
        </button>

        <button className={styles.btn} onClick={() => cr()}>
          {" "}
          Circular Dendrogram{" "}
        </button>
      </div>

      <div>
        {selected == true ? (
          <>
            <div>
              <h2 className={styles.name}>Linear Dendrogram</h2>
              <img src="/linear.svg" alt="Linear" />
            </div>
          </>
        ) : (
          <>
            {cselected == true ? (
              <>
                <div>
                  <h2 className={styles.name}>Circular Dendrogram</h2>
                  <img src="/circular.svg" alt="Linear" />
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Toggle;
