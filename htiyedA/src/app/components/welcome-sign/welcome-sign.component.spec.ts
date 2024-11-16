import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WelcomeSignComponent } from './welcome-sign.component';

describe('WelcomeSignComponent', () => {
  let component: WelcomeSignComponent;
  let fixture: ComponentFixture<WelcomeSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two images', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toBe(2);
  });

  it('should have the correct src attributes for images', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images[0].nativeElement.src).toContain('/images/welcome-sign.png');
    expect(images[1].nativeElement.src).toContain('/images/htiyed.png');
  });

  it('should have alt attributes for both images', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    images.forEach(image => {
      const altText = image.nativeElement.getAttribute('alt');
      expect(altText).toBeTruthy();
    });
  });

  it('should apply correct styles to images', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    images.forEach(image => {
      const styles = getComputedStyle(image.nativeElement);
      expect(styles.width).toBe('48%');
      expect(styles.height).toBe('auto');
      expect(styles.paddingTop).toBe('2%');
      expect(styles.borderRadius).toBe('22px');
    });
  });
});