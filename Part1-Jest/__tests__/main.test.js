const formatVolumeIconPath = require("../assets/scripts/main");



const volumeLevelPath = {
  level0: "./assets/media/icons/volume-level-0.svg",
  level1: "./assets/media/icons/volume-level-1.svg",
  level2: "./assets/media/icons/volume-level-2.svg",
  level3: "./assets/media/icons/volume-level-3.svg",
};

describe("Volume Icon", () => {

    test('Level 0', () => { expect(formatVolumeIconPath(0)).toMatch(volumeLevelPath.level0); });
    
    test('Level 1', () => {
        for (let volume = 1; volume <= 33; ++volume) { 
            expect(formatVolumeIconPath(volume)).toMatch(volumeLevelPath.level1)
        }
    });

    test('Level 2', () => {
        for (let volume = 34; volume <= 66; ++volume) { 
            expect(formatVolumeIconPath(volume)).toMatch(volumeLevelPath.level2)
        }
    });

    test('Level 3', () => {
        for (let volume = 67; volume <= 100; ++volume) { 
            expect(formatVolumeIconPath(volume)).toMatch(volumeLevelPath.level3)
        }
    });
});
