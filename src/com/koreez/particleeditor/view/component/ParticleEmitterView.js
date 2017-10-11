import Phaser from 'phaser'

export default class ParticleEmitterView {
  static NAME = 'ParticleEmitterView'
  static PARTICLE_IMAGE_CHANGE = ParticleEmitterView.NAME + 'ParticleImageChange'
  static DIMENSION_CHANGE = ParticleEmitterView.NAME + 'DimensionChange'
  static POSITION_OFFSET_CHANGE = ParticleEmitterView.NAME + 'PositionOffsetChange'
  static GRAVITY_CHANGE = ParticleEmitterView.NAME + 'GravityChange'
  static BOUNCE_CHANGE = ParticleEmitterView.NAME + 'BounceChange'
  static ANGULAR_DRAG_CHANGE = ParticleEmitterView.NAME + 'AngularDragChange'
  static LIFESPAN_CHANGE = ParticleEmitterView.NAME + 'LifespanChange'
  static FREQUENCY_CHANGE = ParticleEmitterView.NAME + 'FrequencyChange'
  static QUANTITY_CHANGE = ParticleEmitterView.NAME + 'QuantityChange'
  static TOTAL_CHANGE = ParticleEmitterView.NAME + 'TotalChange'
  static MAX_PARTICLES_CHANGE = ParticleEmitterView.NAME + 'MaxParticlesChange'
  static COLLIDE_WORLD_BOUNDS_CHANGE = ParticleEmitterView.NAME + 'CollideWorldBoundsChange'
  static COLLIDE_CHANGE = ParticleEmitterView.NAME + 'CollideChange'
  static IMMEDIATE_CHANGE = ParticleEmitterView.NAME + 'ImmediateChange'
  static FLOW_CHANGE = ParticleEmitterView.NAME + 'FlowChange'
  static EXPLODE_CHANGE = ParticleEmitterView.NAME + 'ExplodeChange'
  static SCALE_CHANGE_PROPORTIONAL = ParticleEmitterView.NAME + 'ScaleChangeProportional'
  static SCALE_CHANGE_DISPROPORTIONAL = ParticleEmitterView.NAME + 'ScaleChangeDisproportional'
  static SCALE_TYPE_CHANGE = ParticleEmitterView.NAME + 'ScaleTypeChange'
  static ROTATION_CHANGE = ParticleEmitterView.NAME + 'RotationChange'
  static SPEED_CHANGE = ParticleEmitterView.NAME + 'SpeedChange'
  static ALPHA_CHANGE = ParticleEmitterView.NAME + 'AlphaChange'

  constructor () {
    this.onParticleImageChange = new Phaser.Signal()
    this.onWidthChange = new Phaser.Signal()
    this.onHeightChange = new Phaser.Signal()
    this.onXOffsetChange = new Phaser.Signal()
    this.onYOffsetChange = new Phaser.Signal()
    this.onGravityXChange = new Phaser.Signal()
    this.onGravityYChange = new Phaser.Signal()
    this.onBounceXChange = new Phaser.Signal()
    this.onBounceYChange = new Phaser.Signal()
    this.onAngularDragChange = new Phaser.Signal()
    this.onLifespanChange = new Phaser.Signal()
    this.onFrequencyChange = new Phaser.Signal()
    this.onQuantityChange = new Phaser.Signal()
    this.onTotalChange = new Phaser.Signal()
    this.onMaxParticlesChange = new Phaser.Signal()
    this.onCollideChange = new Phaser.Signal()
    this.onImmediateChange = new Phaser.Signal()
    this.onCollideWorldBoundsChange = new Phaser.Signal()
    this.onExplodeChange = new Phaser.Signal()
    this.onFlowChange = new Phaser.Signal()
    this.onMinScaleChange = new Phaser.Signal()
    this.onMaxScaleChange = new Phaser.Signal()
    this.onScaleTypeChange = new Phaser.Signal()
    this.onScaleXChange = new Phaser.Signal()
    this.onScaleYChange = new Phaser.Signal()
    this.onScaleToXChange = new Phaser.Signal()
    this.onScaleToYChange = new Phaser.Signal()
    this.onScaleRateChange = new Phaser.Signal()
    this.onScaleYoyoChange = new Phaser.Signal()
    this.onScaleEaseChange = new Phaser.Signal()
    this.onScaleEaseModeChange = new Phaser.Signal()
    this.onRotationMinChange = new Phaser.Signal()
    this.onRotationMaxChange = new Phaser.Signal()
    this.onMinSpeedXChange = new Phaser.Signal()
    this.onMinSpeedYChange = new Phaser.Signal()
    this.onMaxSpeedXChange = new Phaser.Signal()
    this.onMaxSpeedyChange = new Phaser.Signal()
    this.onAlphaMinChange = new Phaser.Signal()
    this.onAlphaMaxChange = new Phaser.Signal()
    this.onAlphaEaseChange = new Phaser.Signal()
    this.onAlphaEaseModeChange = new Phaser.Signal()
    this.onAlphaRateChange = new Phaser.Signal()
    this.onAlphaYoyoChange = new Phaser.Signal()
    this.initProperties()
  }

  get particleImage () {
    return this._particleImage.prop('files')[0]
  }

  get dimension () {
    return {
      width: this._dimension.width.val(),
      height: this._dimension.height.val()
    }
  }

  get positionOffset () {
    return {
      x: this._positionOffset.x.val(),
      y: this._positionOffset.y.val()
    }
  }

  get gravity () {
    return {
      x: this._gravity.x.val(),
      y: this._gravity.y.val()
    }
  }

  get bounce () {
    return {
      x: this._bounce.x.val(),
      y: this._bounce.y.val()
    }
  }

  get angularDrag () {
    return this._angularDrag.val()
  }

  get lifespan () {
    return this._lifespan.val()
  }

  get frequency () {
    return this._frequency.val()
  }

  get quantity () {
    return this._quantity.val()
  }

  get total () {
    return this._total.val()
  }

  get maxParticles () {
    return this._maxParticles.val()
  }

  get collideWorldBounds () {
    return this._collideWorldBounds.prop('checked')
  }

  get collide () {
    return this._collide.prop('checked')
  }

  get immediate () {
    return this._immediate.prop('checked')
  }

  get explode () {
    return this._explode.prop('checked')
  }

  get flow () {
    return this._flow.prop('checked')
  }

  get scaleProportional () {
    return {
      min: this._scale.minScale.val(),
      max: this._scale.maxScale.val()
    }
  }

  get scaleDisproportional () {
    return {
      fromX: this._scale.fromX.val(),
      fromY: this._scale.fromY.val(),
      toX: this._scale.toX.val(),
      toY: this._scale.toY.val(),
      rate: this._scale.rate.val(),
      yoyo: this._scale.yoyo.val(),
      ease: this._scale.ease.text(),
      easeMode: this._scale.easeMode.text()
    }
  }

  get rotation () {
    return {
      min: this._rotation.min.val(),
      max: this._rotation.max.val()
    }
  }

  get speed () {
    return {
      minX: this._speed.minX.val(),
      minY: this._speed.minY.val(),
      maxX: this._speed.maxX.val(),
      maxY: this._speed.maxY.val()
    }
  }

  get alpha () {
    return {
      min: this._alpha.min.val(),
      max: this._alpha.max.val(),
      rate: this._alpha.rate.val(),
      yoyo: this._alpha.yoyo.val(),
      ease: this._alpha.ease.text(),
      easeMode: this._alpha.easeMode.text()
    }
  }

  initProperties () {
    this._particleImage = $('#particleImageBrowser')
      .on('change', this.onEmitterPropertyValueChange.bind(this, this.onParticleImageChange))
    this._dimension = {}
    this._dimension.width = $('#width')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onWidthChange))
    this._dimension.height = $('#height')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onHeightChange))

    this._positionOffset = {}
    this._positionOffset.x = $('#offsetX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onXOffsetChange))
    this._positionOffset.y = $('#offsetY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onYOffsetChange))

    this._gravity = {}
    this._gravity.x = $('#gravityX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onGravityXChange))
    this._gravity.y = $('#gravityY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onGravityYChange))

    this._bounce = {}
    this._bounce.x = $('#bounceX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onBounceXChange))
    this._bounce.y = $('#bounceY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onBounceYChange))

    this._angularDrag = $('#angularDrag')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onAngularDragChange))

    this._flow = $('#flow')
      .on('change', this.onEmitterPropertyValueChange.bind(this, this.onFlowChange))
    this._explode = $('#explode')
      .on('click', this.onEmitterPropertyValueChange.bind(this, this.onExplodeChange))
    this._lifespan = $('#lifespan')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onLifespanChange))
    this._frequency = $('#frequency')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onFrequencyChange))
    this._quantity = $('#quantity')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onQuantityChange))
    this._total = $('#total')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onTotalChange))
    this._maxParticles = $('#maxParticles')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMaxParticlesChange))
    this._immediate = $('#immediate')
      .on('click', this.onEmitterPropertyValueChange.bind(this, this.onImmediateChange))
    this._collide = $('#collide')
      .on('click', this.onEmitterPropertyValueChange.bind(this, this.onCollideChange))
    this._collideWorldBounds = $('#collideWorldBounds')
      .on('click', this.onEmitterPropertyValueChange.bind(this, this.onCollideWorldBoundsChange))

    this._scale = {}
    this._scale.minScale = $('#minScale')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMinScaleChange))
    this._scale.maxScale = $('#maxScale')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMaxScaleChange))
    this._scale.proportionalStatus = $('#proportionalScale')
      .on('click', this.onEmitterPropertyValueChange.bind(this, this.onScaleTypeChange))
    this._scale.fromX = $('#scaleFromX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onScaleXChange))
    this._scale.fromY = $('#scaleFromY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onScaleYChange))
    this._scale.toX = $('#scaleToX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onScaleToXChange))
    this._scale.toY = $('#scaleToY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onScaleToYChange))
    this._scale.rate = $('#scaleRate')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onScaleRateChange))
    this._scale.yoyo = $('#scaleYoyo')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onScaleYoyoChange))
    this._scale.ease = $('#scaleEasing')
      .on('DOMSubtreeModified', this.onEmitterPropertyValueChange.bind(this, this.onScaleEaseChange))
    this._scale.easeMode = $('#scaleEasingMode')
      .on('DOMSubtreeModified', this.onEmitterPropertyValueChange.bind(this, this.onScaleEaseModeChange))
    this._rotation = {}
    this._rotation.min = $('#rotationMin')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onRotationMinChange))
    this._rotation.max = $('#rotationMax')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onRotationMaxChange))

    this._speed = {}
    this._speed.minX = $('#minSpeedX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMinSpeedXChange))
    this._speed.minY = $('#minSpeedY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMinSpeedYChange))
    this._speed.maxX = $('#maxSpeedX')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMaxSpeedXChange))
    this._speed.maxY = $('#maxSpeedY')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onMaxSpeedyChange))

    this._alpha = {}
    this._alpha.min = $('#alphaMin')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onAlphaMinChange))
    this._alpha.max = $('#alphaMax')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onAlphaMaxChange))
    this._alpha.ease = $('#alphaEasing')
      .on('DOMSubtreeModified', this.onEmitterPropertyValueChange.bind(this, this.onAlphaEaseChange))
    this._alpha.easeMode = $('#alphaEasingMode')
      .on('DOMSubtreeModified', this.onEmitterPropertyValueChange.bind(this, this.onAlphaEaseModeChange))
    this._alpha.rate = $('#alphaRate')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onAlphaRateChange))
    this._alpha.yoyo = $('#alphaYoyo')
      .on('input change', this.onEmitterPropertyValueChange.bind(this, this.onAlphaYoyoChange))
  }

  onEmitterPropertyValueChange (eventToDispatch, event) {
    eventToDispatch.dispatch()
  }

  setValues (currentEmitterName, currentEmitter) {
    this._dimension.width.val(currentEmitter.width)
    this._dimension.height.val(currentEmitter.height)
    this._positionOffset.x.val(currentEmitter.emitX)
    this._positionOffset.y.val(currentEmitter.emitY)
    this._gravity.x.val(currentEmitter.gravityX)
    this._gravity.y.val(currentEmitter.gravityY)
    this._bounce.x.val(currentEmitter.bounceX)
    this._bounce.y.val(currentEmitter.bounceY)
    this._angularDrag.val(currentEmitter.angularDrag)
    this._flow.prop('checked', currentEmitter.flow)
    this._explode.prop('checked', currentEmitter.explode)
    this._lifespan.val(currentEmitter.lifespan)
    this._frequency.val(currentEmitter.frequency)
    this._quantity.val(currentEmitter.quantity)
    this._total.val(currentEmitter.total)
    this._maxParticles.val(currentEmitter.maxParticles)
    this._collide.prop('checked', currentEmitter.collide)
    this._collideWorldBounds.prop('checked', currentEmitter.collideWorldBounds)
    this._scale.proportionalStatus.prop('checked', currentEmitter.proportional)
    this._scale.minScale.val(currentEmitter.minScale)
    this._scale.maxScale.val(currentEmitter.maxScale)
    this._scale.fromX.val(currentEmitter.scaleFromX)
    this._scale.fromY.val(currentEmitter.scaleFromY)
    this._scale.toX.val(currentEmitter.scaleToX)
    this._scale.toY.val(currentEmitter.scaleToY)
    this._scale.rate.val(currentEmitter.scaleRate)
    this._scale.yoyo.val(currentEmitter.yoyo)
    this._scale.ease.val(currentEmitter.ease)
    this._scale.easeMode.val(currentEmitter.easeMode)
    this._rotation.min.val(currentEmitter.rotationMin)
    this._rotation.max.val(currentEmitter.rotationMax)
    this._speed.minX.val(currentEmitter.minSpeedX)
    this._speed.minY.val(currentEmitter.minSpeedY)
    this._speed.maxX.val(currentEmitter.maxSpeedX)
    this._speed.maxY.val(currentEmitter.maxSpeedY)
    this._alpha.min.val(currentEmitter.alphaMin)
    this._alpha.max.val(currentEmitter.alphaMax)
    this._alpha.ease.val(currentEmitter.alphaEase)
    this._alpha.easeMode.val(currentEmitter.alphaEaseMode)
    this._alpha.rate.val(currentEmitter.alphaRate)
    this._alpha.yoyo.val(currentEmitter.alphaYoyo)
    $('#particleImagePreview').css('background-image', 'url(' + currentEmitter[currentEmitterName] + ')')
  }
}