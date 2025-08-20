import { StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Item, ListPage } from '@/components/ListPage'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { TZDate } from '@date-fns/tz'

function getData() {
  return fetch(
    `https://api-hotop.llweb.top/wb/https://raw.githubusercontent.com/sunven/hotop/refs/heads/dev/api/${format(
      new TZDate(Date.now(), 'Asia/Shanghai'),
      'yyyy-MM-dd'
    )}.json`
  )
    .then(res => res.json())
    .catch(err => {
      console.error('获取数据失败:', err)
      return []
    })
}

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([])
  const [refreshing, setRefreshing] = useState(false)

  const loadData = async () => {
    try {
      const data = await getData()
      setItems(data)
    } catch (error) {
      console.error('加载数据失败:', error)
    }
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await loadData()
    setRefreshing(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleItemPress = (item: Item) => {
    // Alert.alert('项目选中', `你选择了: ${item.title}`);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
          <ThemedText style={styles.title} type="title">
            Hotop
          </ThemedText>
          <ListPage items={items} onItemPress={handleItemPress} refreshing={refreshing} onRefresh={onRefresh} />
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    color: '#ff6900',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
})
