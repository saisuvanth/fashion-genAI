from bs4 import BeautifulSoup
import requests
import urllib

headers = {'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'}


def scraper(url):
    s = requests.Session()
    res = s.get("https://www.flipkart.com/ausk-striped-men-round-neck-blue-black-t-shirt/p/itmc4b97a0badb26?pid=TSHGHU9FWVZFMTEH&lid=LSTTSHGHU9FWVZFMTEHL7DCSL&marketplace=FLIPKART&store=clo%2Fash&spotlightTagId=BestsellerId_clo%2Fash&srno=b_1_3&otracker=browse&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&fm=organic&iid=c5631962-3395-4e88-8dbe-c1ea8be895ce.TSHGHU9FWVZFMTEH.SEARCH&ppt=browse&ppn=browse&ssid=q3bhttrzk00000001692535392212", headers=headers, proxies=urllib.request.getproxies())
    # cookie=res.cookies
    soup=BeautifulSoup(res.content,"html.parser")
    imageCont=soup.find_all("li",class_='_20Gt85 _1Y_A6W _2_B7hD')
    for image in imageCont:
        print(image.find('img').attrs['src'])


scraper('https://www.myntra.com/tshirts/roadster/roadster-men-black-solid-round-neck-t-shirt/3314131/buy')

