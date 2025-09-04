import { useCallback, RefObject } from "react";
import gsap from "gsap";
import type { Swiper as SwiperClass } from "swiper/types";

type BulletElement = HTMLElement & { __customClick?: (e: Event) => void };

export const useCirclePagination = (
  paginationRef: RefObject<HTMLDivElement | null>,
  labels: string[],
  setCurrentSlide: (n: number) => void,
  options?: { ringDiameter?: number; anchorAngle?: number }
) => {
  const ringDiameter = options?.ringDiameter ?? 400;
  const anchorAngle = options?.anchorAngle ?? -60;

  const setupBullets = useCallback(
    (swiper: SwiperClass) => {
      const pagEl = paginationRef.current;
      swiper.on("slideChange", () => setCurrentSlide(swiper.activeIndex + 1));
      if (!pagEl) return;
      const bullets = Array.from(
        pagEl.querySelectorAll<BulletElement>(".swiper-pagination-bullet")
      );
      if (!bullets.length) return;

      const total = bullets.length;
      const RADIUS = ringDiameter / 2;
      const step = 360 / total;

      // place bullets and add labels once
      bullets.forEach((b, idx) => {
        b.setAttribute("data-index", `${idx + 1}`);
        if (!b.querySelector(".bullet-label")) {
          const label = labels[idx] ?? "";
          const span = document.createElement("span");
          span.className = "bullet-label";
          span.textContent = label;
          b.appendChild(span);
        }
        const angleRad = (step * idx * Math.PI) / 180;
        const x = RADIUS + RADIUS * Math.cos(angleRad);
        const y = RADIUS + RADIUS * Math.sin(angleRad);
        b.style.left = `${x}px`;
        b.style.top = `${y}px`;
        gsap.set(b, { rotation: 0 });
        b.style.pointerEvents = "auto";
        b.style.cursor = "pointer";
      });

      const rotation = { val: anchorAngle - step * swiper.activeIndex };

      gsap.set(pagEl, { rotation: rotation.val, transformOrigin: "50% 50%" });
      bullets.forEach((b) => gsap.set(b, { rotation: -rotation.val }));

      const normalizeTo180 = (angle: number) =>
        ((((angle + 180) % 360) + 360) % 360) - 180;
      const rotateToIndex = (index: number, duration = 0.6) => {
        const desired = anchorAngle - step * index;
        const delta = normalizeTo180(desired - rotation.val);
        rotation.val = Math.round((rotation.val + delta) * 1000) / 1000;
        gsap.to(pagEl, {
          rotation: rotation.val,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            const r =
              (gsap.getProperty(pagEl, "rotation") as number) ?? rotation.val;
            bullets.forEach((b) => gsap.set(b, { rotation: -r }));
          },
        });
      };

      // attach handlers
      bullets.forEach((b, i) => {
        if (b.__customClick) b.removeEventListener("click", b.__customClick);
        const handler = (e: Event) => {
          e.stopPropagation();
          if (swiper.animating) return;
          if (swiper.params.loop) swiper.slideToLoop(i, 600, true);
          else swiper.slideTo(i, 600, true);
          rotateToIndex(i, 0.6);
        };
        b.addEventListener("click", handler);
        b.__customClick = handler;
      });

      const onSlideChange = () => {
        rotateToIndex(swiper.activeIndex);
        bullets.forEach((b, bi) => {
          if (bi === swiper.activeIndex) {
            b.classList.add("active-bullet");
            b.classList.remove("inactive-bullet");
          } else {
            b.classList.remove("active-bullet");
            b.classList.add("inactive-bullet");
          }
        });
      };

      swiper.on("slideChange", onSlideChange);

      swiper.on("destroy", () => {
        bullets.forEach((b) => {
          if (b.__customClick) {
            b.removeEventListener("click", b.__customClick);
            delete b.__customClick;
          }
        });
        swiper.off("slideChange", onSlideChange);
      });
    },
    [paginationRef, labels, setCurrentSlide, ringDiameter, anchorAngle]
  );

  return { setupBullets };
};
