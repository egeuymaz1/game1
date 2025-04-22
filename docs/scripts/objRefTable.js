const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ÜzerindeKaydır: 0},
	{Oyuncu: 0},
	{Katı: 0},
	{DöşemeliArkaplan: 0},
	{Domates: 0},
	{Klavye: 0},
	{Sprite: 0}
];

self.InstanceType = {
	Oyuncu: class extends self.ISpriteInstance {},
	DöşemeliArkaplan: class extends self.ITiledBackgroundInstance {},
	Domates: class extends self.ISpriteInstance {},
	Klavye: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {}
}