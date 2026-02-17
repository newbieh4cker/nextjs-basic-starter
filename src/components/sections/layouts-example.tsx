import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LayoutsExample() {
  return (
    <div className="space-y-8">
      {/* 그리드 레이아웃 */}
      <Card>
        <CardHeader>
          <CardTitle>반응형 그리드 레이아웃</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-32 bg-primary/10 rounded-lg flex items-center justify-center font-semibold"
              >
                아이템 {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 2열 레이아웃 */}
      <Card>
        <CardHeader>
          <CardTitle>사이드바 레이아웃</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 bg-secondary/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">사이드바</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>메뉴 1</li>
                <li>메뉴 2</li>
                <li>메뉴 3</li>
              </ul>
            </div>
            <div className="md:col-span-3 bg-primary/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">메인 콘텐츠</h3>
              <p className="text-sm text-muted-foreground">
                메인 콘텐츠 영역입니다. 데스크톱에서는 3/4 너비를,
                모바일에서는 전체 너비를 사용합니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flexbox 레이아웃 */}
      <Card>
        <CardHeader>
          <CardTitle>Flexbox 레이아웃</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] bg-primary/10 rounded-lg p-4">
              <p className="font-semibold">flex-1</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-primary/10 rounded-lg p-4">
              <p className="font-semibold">flex-1</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-primary/10 rounded-lg p-4">
              <p className="font-semibold">flex-1</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-secondary/50 rounded-lg p-4">
            <span className="font-semibold">왼쪽 정렬</span>
            <span className="font-semibold">오른쪽 정렬</span>
          </div>
        </CardContent>
      </Card>

      {/* 카드 그리드 */}
      <Card>
        <CardHeader>
          <CardTitle>카드 그리드 레이아웃</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["기능 1", "기능 2", "기능 3", "기능 4"].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature}에 대한 설명입니다.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
